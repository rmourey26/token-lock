import cls from "./GnosisLogo.module.css"

const Dfionelogo: React.FC = () => (
  <div className={cls.container}>
    <img
      className={cls.logo}
      src="/dfi1-fill.svg"
      alt="DFI1 Logo"
      height={36}
      width={36}
    />
  </div>
)

export default Dfionelogo
