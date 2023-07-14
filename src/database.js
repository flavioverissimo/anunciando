import { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, push, onValue, off, limitToLast, query } from "firebase/database";

export const useWriteData = (endpoint) => {
  const [status, setStatus] = useState("");

  const save = async (data) => {
    try {
      if (Object.keys(data).length > 0) {
        await push(ref(db, endpoint), data);
        setStatus("SUCCESS");
      }
    } catch (err) {
      setStatus("ERROR");
    }
  };

  return [status, save];
};

export const useGetdata = (endpoint) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = ref(db, endpoint);
    onValue(getData, (snapshot) => {
      setData(snapshot.val());
    });

    return () => {
      off(getData);
    };
  }, [endpoint]);

  return data;
};

export const useGetLimitData = (endpoint, limit) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = query(ref(db, endpoint), limitToLast(limit));
    onValue(getData, (snapshot) => {
      setData(snapshot.val());
    });

    return () => {
      off(getData);
    };
  }, [endpoint, limit]);

  return data;
};
