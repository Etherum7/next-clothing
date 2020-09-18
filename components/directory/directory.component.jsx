import React, { useState } from "react";

import MenuItem from "../menu-item/menu-item.component";

import styles from "./directory.module.scss";

import directoryData from "./directory.data";

function Directory() {
  const [sections] = useState(directoryData);
  return (
    <div className={styles.directoryMenu}>
      {sections.map(({id, ...sectionsProps}) => (
        <MenuItem key={id} {...sectionsProps} />
      ))}
    </div>
  );
}

export default Directory;
