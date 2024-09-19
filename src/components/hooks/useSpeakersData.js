import useGeneralizedCrudMethods from "./useGeneralizedCrudMethods";

export const useSpeakersData = () => {
  const url = "/api/speakers";
  const errorNotificationFn = (error) => {
    console.log("Error from useSpeakersData", error);
  };

  const {
    data,
    error,
    loadingStatus,
    createRecord,
    updateRecord,
    deleteRecord,
  } = useGeneralizedCrudMethods(url, errorNotificationFn);

  const createSpeaker = (speakerRec, callbackDone) => {
    createRecord(speakerRec, callbackDone);
  };

  const updateSpeaker = (speakerRec, callbackDone) => {
    updateRecord(speakerRec, callbackDone);
  };

  const deleteSpeaker = (id, callbackDone) => {
    deleteRecord(id, callbackDone);
  };

  return {
    speakerList: data,
    loadingStatus,
    error,
    createSpeaker,
    updateSpeaker,
    deleteSpeaker,
  };
};
