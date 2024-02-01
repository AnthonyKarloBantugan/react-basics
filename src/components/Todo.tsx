import { Todo } from "@/types";
import {
  Checkbox,
  Flex,
  IconButton,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPencil, FaTrash } from "react-icons/fa6";

type TodoProps = {
  id: number;
  todo: Todo;
  onDelete?: (id: number) => void;
  onUpdate?: (todo: Todo, id: number) => void;
};

const Todo = ({
  id,
  todo,
  onDelete = () => {},
  onUpdate = () => {},
}: TodoProps) => {
  const [newTodo, setNewTodo] = useState<Todo>(todo);
  const [isEdit, setIsEdit] = useState(false);
  const [isDone, setIsDone] = useState(false);

  return (
    <Flex justifyContent="space-between">
      {isEdit ? (
        <Input
          value={newTodo.todo}
          onChange={(e) => setNewTodo({ ...newTodo, todo: e.target.value })}
        />
      ) : (
        <Checkbox
          size="md"
          colorScheme="red"
          onChange={(e) => {
            setIsDone(!isDone);
            onUpdate({ ...todo, isDone: e.target.checked }, id);
          }}
        >
          <Text as={isDone ? "s" : "p"}>{todo.todo}</Text>
        </Checkbox>
      )}
      <Flex gap="8px" paddingLeft="1rem">
        <Tooltip label={isEdit ? "Save" : "Edit"}>
          <IconButton
            variant="ghost"
            aria-label="delete-button"
            onClick={() => {
              setIsEdit(!isEdit);
              onUpdate(newTodo, id);
            }}
            isDisabled={isDone}
          >
            <FaPencil />
          </IconButton>
        </Tooltip>
        <Tooltip label="Delete">
          <IconButton
            variant="ghost"
            aria-label="delete-button"
            color="red"
            onClick={() => onDelete(id)}
          >
            <FaTrash />
          </IconButton>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default Todo;
