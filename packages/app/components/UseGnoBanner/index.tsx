import Card from "../Card"

import classes from "./UseGnoBanner.module.css"

const UseGNOBanner = () => {
  return (
    <a href="https://defione.io/" className={classes.cardLink}>
      <Card className={classes.card}>
        <img src="/twitter-image.jpg" alt="blockchain business" />
        <h2>Not sure where to use your DFI1?</h2>
        <p>
          Click here to see a preview of DeFi ONE, the omni-chain digital asset exchange platform. 
        </p>
      </Card>
    </a>
  )
}

export default UseGNOBanner
