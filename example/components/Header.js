import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  textDecoration: 'none',
  color: '#0b8caf'
}

const navStyle = {
  marginBottom: 50
}

const Header = () => (
  <div style={navStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/bar">
      <a style={linkStyle}>Bar</a>
    </Link>
    <Link href="/bubble-spin">
      <a style={linkStyle}>Bubble-spin</a>
    </Link>
    <Link href="/bubble">
      <a style={linkStyle}>Bubble</a>
    </Link>
    <Link href="/comet-spin">
      <a style={linkStyle}>Comet-spin</a>
    </Link>
    <Link href="/cylinder-spin">
      <a style={linkStyle}>Cylinder-spin</a>
    </Link>
    <Link href="/resize-spin">
      <a style={linkStyle}>Resize-spin</a>
    </Link>
    <Link href="/rotate-spin">
      <a style={linkStyle}>Rotate-spin</a>
    </Link>
    <Link href="/spin">
      <a style={linkStyle}>Spin</a>
    </Link>
  </div>
)

export default Header