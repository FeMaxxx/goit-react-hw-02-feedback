import React from "react";

import { ButtonsList, Item, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {Object.keys(options).map((el) => (
        <Item>
          <Button
            key={el}
            name={el}
            type="button"
            onClick={() => onLeaveFeedback(el)}
          >
            {el}
          </Button>
        </Item>
      ))}
    </ButtonsList>
  );
};
