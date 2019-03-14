import * as React from 'react';
import { Redirect } from 'react-router-dom';

interface Props {}
class RecipePage extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div>
        <style>
        {`
            body {
              font-family: Arial;
              text-align: center;
              padding-top: 100px;
              background-color: #232323;
          }
        `}
        </style>
      </div>
    )
  }
}

export default RecipePage
