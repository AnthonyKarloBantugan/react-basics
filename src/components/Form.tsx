import { Todo } from "@/types";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { useState } from "react";

type FormProps = {
  onSubmit: (todo: Todo) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) {
      return setIsError(true);
    }
    onSubmit({
      todo: inputValue,
      isDone: false,
    });
    setInputValue("");
  };

  return (
    <Box
      as="form"
      paddingBottom="1rem"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
      <FormControl isInvalid={isError}>
        <InputGroup>
          <Input
            placeholder="New Task"
            value={inputValue}
            onChange={(e) => {
              if (isError) setIsError(false);
              setInputValue(e.target.value);
            }}
          />
          <InputRightAddon padding="0px">
            <Button
              type="submit"
              bgColor="black"
              color="white"
              borderRadius="0 4px 4px 0"
              // isDisabled={!inputValue}
            >
              Add
            </Button>
          </InputRightAddon>
        </InputGroup>
        <FormErrorMessage fontSize="12px">
          Input should not be empty
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default Form;
