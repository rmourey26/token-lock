import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import { CHAINS } from "../config"
import {
  Connect,
  ConnectHint,
  GnosisLogo,
  QoneLogo,
  Dfionelogo,
  LockedGnoLogo,
  LockedBalance,
  useTokenLockConfig,
  Withdraw,
  DepositAndWithdraw,
  StatsDeposit,
  StatsLocked,
  StatsWithdraw,
} from "../components"
import { useNetwork } from "wagmi"
import UseGNOBanner from "../components/UseGnoBanner"

const isProd =
  typeof window !== "undefined" && window.location.hostname === "lock.gnosis.io"

const Home: NextPage = () => {
  const config = useTokenLockConfig()
  const network = useNetwork()

  const connectedChainId = network.chain?.id
  const connected =
    connectedChainId && CHAINS.some(({ id }) => id === connectedChainId)

  const depositPeriodOngoing = config.depositDeadline.getTime() > Date.now()
  const lockPeriodOngoing =
    config.depositDeadline.getTime() < Date.now() &&
    config.depositDeadline.getTime() + config.lockDuration > Date.now()
  const lockPeriodOver =
    config.depositDeadline.getTime() + config.lockDuration < Date.now()

  return (
    <div className={styles.container} id="root">
      <Head>
        <title>Lock DFI1</title>
        <meta
          name="description"
          content="Govern the omni-chain swap protocol built for the post quantum era."
        />
        {!isProd && <meta name="robots" content="noindex" />}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Dfionelogo />
        <LockedGnoLogo locked={lockPeriodOngoing} />
        <Connect />
      </header>

      <main className={styles.main}>
        <UseGNOBanner />
        {depositPeriodOngoing && (
          <>
            <StatsDeposit />
            {connected && <DepositAndWithdraw />}
          </>
        )}

        {lockPeriodOngoing && (
          <>
            <StatsLocked />
            {connected && <LockedBalance />}
          </>
        )}

        {lockPeriodOver && (
          <>
            <StatsWithdraw />
            {connected && <Withdraw />}
          </>
        )}

        {!connected && <ConnectHint />}
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.left}>
            <span>DFI1 contract: </span>
            {connectedChainId === 100 ? (
              <a
                href="https://eth.blockscout.com/token/0xeaaD65885fEA47a3B1258935f4Ce83aaB06FDD3A"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/etherscan.svg"
                  alt="View contract on Blockscout"
                  width={16}
                  height={16}
                />
              </a>
            ) : (
              <a
                href="https://etherscan.io/token/0xeaad65885fea47a3b1258935f4ce83aab06fdd3a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/etherscan.svg"
                  alt="View contract on Etherscan"
                  width={16}
                  height={16}
                />
              </a>
            )}

            <a
              href="https://github.com/rmourey26/token-lock/blob/master/packages/contracts/contracts/TokenLock.sol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github.png"
                alt="View contract source code on GitHub"
                width={16}
                height={16}
              />
            </a>
          </div>
          <div className={styles.right}>
            <a
              href="https://discord.com/invite/dDDYuaP8d2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/discordicon.svg"
                alt="Gnosis Guild Discord"
                width={16}
                height={16}
              />
            </a>
            <a
              href="https://x.com/dfione"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/twittericon.svg"
                alt="Dfione X"
                width={16}
                height={16}
              />
            </a>

            <div className={styles.divider} />

            <a
              className={styles.gg}
              href="https://quantumone.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              DFI1 by {" "}
              <span className={styles.logo}>
                <img
                  src="/qlogo.svg"
                  alt="quantum-one-logo"
                  width={32}
                  height={32}
                />
              </span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
