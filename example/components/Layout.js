import Header from './Header'
import Page from 'react-page-loading'

const layoutStyle = {
  margin: 20,
  padding: 20,
}

const contentStyle = {
  color: '#808080'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <Page loader={"spin"} color={"#0b8caf"} size={3}>
      <p style={contentStyle}>
        {props.children}
      </p>
    </Page>
  </div>
)

export default Layout