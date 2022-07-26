import React from 'react'
import PortfolioGraph from './PorfolioHeader'
import PortfolioTable from './Portfoliotable'
import styles from './Portfolio.module.scss'

const PortfolioComp = () => {
  return (
    <div>
        <div className={styles.portfolioBg}>
            
        <PortfolioGraph />
        <PortfolioTable />
        </div>
        
    </div>
  )
}

export default PortfolioComp