import LikeButton2 from "./like_button2.js";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <div>
        <button onClick={() => this.setState({ liked: true }) }>
            Like
        </button>
        <LikeButton2 />
        </div>
    );
  }
}

let domContainer = document.querySelector('#like_button_container');
ReactDOM.render(<LikeButton />, domContainer);