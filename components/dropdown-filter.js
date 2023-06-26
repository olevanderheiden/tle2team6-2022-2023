import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";

// not in use currently but working functionally on IOS
export default function DropdownFilter() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "food", value: "food" },
    { label: "food2", value: "food2" },
    { label: "food3", value: "food3" },
    { label: "food4", value: "food4" },
    { label: "food5", value: "food5" },
    { label: "food6", value: "food6" },
    { label: "food7", value: "food7" },
    { label: "food8", value: "food8" },
    { label: "food9", value: "food9" },
    { label: "food10", value: "food10" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      multiple={true}
      min={0}
      max={5}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Select a filter"
      searchable={true}
      mode="BADGE"
      selectedItemContainerStyle={{
        backgroundColor: "#90ff00",
      }}
      listMode="FLATLIST"
    />
  );
}
