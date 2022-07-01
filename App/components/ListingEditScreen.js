import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import AppForm from "../compo/AppForm";
import AppFormFill from "../compo/AppFormFill";
import AppFormPicker from "../compo/AppFormPicker";
import FormImagePicker from "../compo/FormImagePicker";
import listingsApi from "../api/listings";
import Screen from "../compo/Screen";
import SubmitButton from "../compo/SubmitButton";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  categories: Yup.string().nullable().required().label("Categories"),
  description: Yup.string().label("Description"),
  price: Yup.number().min(1).max(10000).label("Price"),
  title: Yup.string().required().min(1).label("Title"),
  images: Yup.array().min(1, "Please Select At Least One Image"),
});

const categories = [
  { color: "#fc5c65", icon: "floor-lamp", label: "Furniture", value: 1 },
  { color: "#fd9644", icon: "car", label: "Cars", value: 2 },
  { color: "#fed330", icon: "camera", label: "Camera", value: 3 },
  { color: "#26de81", icon: "cards", label: "Games", value: 4 },
  { color: "#26de81", icon: "shoe-heel", label: "Clothings", value: 5 },
  { color: "#45aaf2", icon: "basketball", label: "Sports", value: 6 },
  { color: "#45aaf2", icon: "headphones", label: "Movies & Music", value: 7 },
  { color: "#45aaf2", icon: "book", label: "Books", value: 8 },
  { color: "#4b7bec", icon: "book", label: "Other", value: 9 },
];

function ListingEditScreen({ index }) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }
    resetForm();
  };
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: 0,
          description: "",
          categories: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormFill maxLenght={255} name="title" placeholder="Title" />
        <AppFormFill
          keyboardType="numeric"
          maxLenght={8}
          width={120}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          column={3}
          width={200}
          name="categories"
          placeholder="Categories"
        />
        <AppFormFill
          maxLenght={255}
          multiLine
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>

      {uploadVisible && (
        <UploadScreen
          onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible}
          closeModal={() => setUploadVisible(false)}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
