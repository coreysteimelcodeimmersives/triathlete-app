import React, { useCallback, useState, useMemo } from "react";
import isHotKey from "is-hotkey";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
} from "slate";
import { withHistory } from "slate-history";
import CodeElement from "../Components/CodeElement";
import DefaultElement from "../Components/DefaultElement";
import Leaf from "../Components/Leaf";
import CustomEditor from "../Utils/SlateHelpers";
import BoldIcon from "../Icons/boldIconButton.png";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const WorkoutBuilder = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const initialValue = useMemo(
    () =>
      JSON.parse(localStorage.getItem("content")) || [
        {
          type: "paragraph",
          children: [{ text: "A line of text in a paragraph." }],
        },
      ],
    []
  );
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);
  return (
    <>
      <h1>Workout Builder</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Workout Title</Form.Label>
          <Form.Control placeholder="Title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Warm Up</Form.Label>
          <Slate
            editor={editor}
            value={initialValue}
            onChange={(value) => {
              const isAstChange = editor.operations.some(
                (op) => "set_selection" !== op.type
              );
              if (isAstChange) {
                // Save the value to Local Storage.
                const content = JSON.stringify(value);
                localStorage.setItem("content", content);
              }
            }}
          >
            <ButtonToolbar
              className="mb-3"
              aria-label="Toolbar with button groups"
            >
              <Button variant="secondary" className="TextEditButtons">
                <img className="TextEditImg" src={BoldIcon}></img>
              </Button>{" "}
            </ButtonToolbar>
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              onKeyDown={(event) => {
                if (!event.ctrlKey) {
                  return;
                }
                switch (event.key) {
                  case "`": {
                    event.preventDefault();
                    CustomEditor.toggleCodeBlock(editor);
                    break;
                  }
                  case "b": {
                    event.preventDefault();
                    CustomEditor.toggleBoldMark(editor);
                    break;
                  }

                  default:
                    return;
                }
              }}
            />
          </Slate>
        </Form.Group>
      </Form>
      <img src={BoldIcon}></img>
    </>
  );
};

export default WorkoutBuilder;
