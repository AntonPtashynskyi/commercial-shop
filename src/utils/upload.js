import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const upload = async (file) => {
  if (!file) return;
  const fileRef = ref(storage, `avatar/${file.name + v4()}`);

  try {
    const res = await uploadBytes(fileRef, file);
    if (res) {
      const url = await getDownloadURL(res.ref);
      return url;
    }
  } catch (error) {
    console.log(error);
  }
};
