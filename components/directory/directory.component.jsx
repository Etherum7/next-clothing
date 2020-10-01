import React, { useState } from "react";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { selectSections } from "../../redux/directory/directory.selector";

import MenuItem from "../menu-item/menu-item.component";

import styles from "./directory.module.scss";

function Directory({ sections }) {
  return (
    <div className={styles.directoryMenu}>
      {sections.map(({ id, ...sectionsProps }) => (
        <MenuItem key={id} {...sectionsProps} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});
export default connect(mapStateToProps)(Directory);
