import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    // destruct user from the rest of props for easy access
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

// ownprops is a reference to the props of this component
// normally you can't access a components props in this state unless you do this
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
