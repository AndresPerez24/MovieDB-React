import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./movieModal.scss";

const MovieModal = ({ closeModal, modalIsOpen, modalInfo, apiKey }) => {
  const { title, release_date, vote_average, id } = modalInfo;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
      )
      .then((res) => {
        setVideos(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, apiKey]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>{title}</h2>
      <FontAwesomeIcon
        className="modal-icon"
        onClick={closeModal}
        icon={faXmark}
        size="2x"
        color=""
      />

      <p>
        Release Date: <span>{release_date}</span>
      </p>
      <p>
        Movie Rating: <span>{vote_average}/10</span>
      </p>
      {videos[0] && <YouTube videoId={videos[0].key} />}
    </Modal>
  );
};

export default MovieModal;
