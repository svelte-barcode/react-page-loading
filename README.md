![react-page-loading](https://github.com/codefacebook/react-page-loading/blob/master/images/react-page-loading.png)

# react-page-loading

React page loading components using to display a loading spin until the page loads completely.

<img src="https://github.com/codefacebook/react-page-loading/blob/master/images/react-page-loading-features.gif" width="77%" alt="react-page-loading features">

## Features

* Working with react-router

* Working with react-router-redux

* ... etc.

## Installation

```
npm install react-page-loading --save
```

## Usage

```
import React, { Component } from 'react'
import Page from 'react-page-loading'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Page loader={"bar"} color={"#A9A9A9"} size={4}>
          <h1>Title</h1>
          <p>content goes here</p>
        </Page>
      </div>
    )
  }
}
```

## Properties

| Name          | Type             | Default value  |
|:------------- |:---------------- |:-------------- |
| loader        | PropTypes.string | bar            |
| color         | PropTypes.string | #A9A9A9        |
| size          | PropTypes.number | 4              |
| duration      | PropTypes.number | 1              |

### loader

| Value         |
|:------------- |
| bar           |
| bubble-spin   |
| bubble        |
| comet-spin    |
| cylinder-spin |
| resize-spin   |
| rotate-spin   |
| spin          |
