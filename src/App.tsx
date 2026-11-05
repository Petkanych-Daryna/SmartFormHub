import "./App.css";

import { FocusInputComponent } from "./components/FocusInputComponent";
import { FormComponent } from "./components/FormComponent";
import { KeyboardInputComponent } from "./components/KeyboardInputComponent";
import { ScrollComponent } from "./components/ScrollComponent";
import { SelectComponent } from "./components/SelectComponent/SelectComponent";

import { TargetCurrentTarget } from "./components/TargetCurrentTarget";
import { TextAreaComponent } from "./components/TextAreaComponent";
import { TextInputComponent } from "./components/TextInputComponent";
import { CustomInputProps } from "./components/CustomInputProps";
import { UniversalForm } from "./components/UniversalForm";
import { CopyComponent } from "./components/CopyComponent";
import { useEffect } from "react";
import { DataStorage, echo, getFirstItem, mergeObjects, pair, type Box } from "./components/generics";
import { ArrayStateComponent } from "./components/ArrayStateComponent";
import { List } from "./components/List";

function App() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Клік :>> ", e.clientX, e.clientY);
  };

  useEffect(() => {
    console.log("Задача 16 :>> ", echo);
    console.log("Задача 17 :>> ", pair);
    const myBox: Box<string> = { value: "Секретний текст" };
    console.log("Задача 18 :>> ", myBox.value);

    console.log("Задача 19 :>> ", getFirstItem([20, 10, 30]));
    const merged = mergeObjects({name: "Ola"}, {score: 100})
    console.log('Задача 20 :>> ', merged);

    const storage = new DataStorage<string>();
    storage.addItem("Перший елемент");
    storage.addItem("Другий елемент");
    console.log("Задача 26:", storage.getItems());
  },[]);

  return (
    <>
      <button onClick={handleClick}>Кнопка</button>
      <br />
      <TextInputComponent />
      <br />
      <TextAreaComponent />
      <br />
      <SelectComponent />
      <br />
      <FormComponent />
      <br />
      <KeyboardInputComponent />
      <br />
      <FocusInputComponent />
      <br />
      <CustomInputProps onChange={(val) => console.log(val)} />
      <br />
      <UniversalForm />
      <br />
      <TargetCurrentTarget />
      <br />
      <ScrollComponent />
      <br />
      <CopyComponent />
      <br />
      <ArrayStateComponent/>
      <List items={["Елемент 1", "Елемент 2"]} renderItem={(item) => item} />
    </>
  );
}

export default App;