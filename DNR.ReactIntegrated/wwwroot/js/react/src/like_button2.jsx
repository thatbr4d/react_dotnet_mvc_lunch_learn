
export default class LikeButton2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this 2.';
    }

    return (
      <button onClick={() => this.setState({ liked: true }) }>
        Like 2
      </button>
    );
  }
}
