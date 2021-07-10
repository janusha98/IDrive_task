import * as React from "react";
import { DashboardMenuItem, MenuItemLink } from "react-admin";
import BookIcon from "@material-ui/icons/Book";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PeopleIcon from "@material-ui/icons/People";
import LabelIcon from "@material-ui/icons/Label";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  menu: {
    backgroundColor: "red"
  }
});

export const Menu = () => {
  const classes = useStyles();
  return (
    <div classes={classes}>
      {/* <DashboardMenuItem /> */}
      <MenuItemLink to="/users" leftIcon={<BookIcon />} />
      <MenuItemLink to="/users" leftIcon={<ChatBubbleIcon />} />
      <MenuItemLink to="/users" leftIcon={<PeopleIcon />} />
      <MenuItemLink to="/users" leftIcon={<LabelIcon />} />
    </div>
  );
};
