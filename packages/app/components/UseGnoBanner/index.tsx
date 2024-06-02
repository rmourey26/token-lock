import Card from "../Card"

import classes from "./UseGnoBanner.module.css"

const UseGNOBanner = () => {
  return (
    <a href="https://defione.io/" className={classes.cardLink}>
      <Card className={classes.card}>
        <img src="/qlogo-invert.svg" alt="quantum one logo" />
        <h2>This is not yet connected to our token contracts.</h2>
        <p>
          Click here to learn about DFI1's quantum inspired AI protocol. 
        </p>
      </Card>
    </a>
  )
}

export default UseGNOBanner
