import { IconAvatarUser } from "@/icons/Icons";
import styles from "./config-profile.module.css";
import React, { useState } from "react";
import { ProfileData } from "./config-profile.types";
import {
  MdLocationCity,
  MdLocationOn,
  MdDateRange,
  MdMailOutline,
  MdRemoveRedEye,
  MdPerson,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import TagPosition from "../tag-position/TagPosition";
import Modal from "../modal/Modal";
import FormUpdateCredentialUser from "../form-update-credential-user/FormUpdateCredentialUser";
import useLogin from "@/hooks/useLogin";

const ConfigProfile = () => {
  const { userInfo } = useLogin();

  const [showModal, setShowModal] = useState<boolean>(false);
  const profileData: ProfileData = {
    name: userInfo?.name || "MANUEL TOBIAS",
    lastName: "",
    location: userInfo?.location || "Río Negro, Antioquia",
    university: userInfo?.university || "Universidad de Antioquia",
    date: "Ago 22 - 2023",
    username: userInfo?.name || "manuel.garcia",
    email: userInfo?.email || "manuel.garcia@udea.edu.co",
    document: userInfo?.documentId || "1000907416",
    password: "contra123",
    position: "Profesional LSC",
  };
  const infoIcons = [
    <MdLocationOn key="location" className="h-8 w-8" />,
    <MdLocationCity key="university" className="h-8 w-8" />,
    <MdDateRange key="date" className="h-8 w-8" />,
    <MdPerson key="username" className="h-8 w-8" />,
    <MdMailOutline key="email" className="h-8 w-8" />,
    <MdOutlinePermContactCalendar key="document" className="h-8 w-8" />,
    <MdRemoveRedEye key="password" className="h-8 w-8" />,
  ];
  return (
    <section className={styles.ProfileSection}>
      <div className={styles.WrapperAvatar}>
        <IconAvatarUser width="80px" height="80px" />
      </div>
      <div className={styles.WrapperTitle}>
        <h3 className={`${styles.FormTitle} `}>{profileData.name}</h3>
        <h3 className={`${styles.FormTitle} `}>{profileData.lastName}</h3>
      </div>
      <ul className={`flex flex-col gap-4 ${styles.DataContainer}`}>
        <li className={styles.ItemData}>
          <MdLocationOn className="h-[1.5rem] w-[1.5rem]" />
          <span>{profileData.location}</span>
        </li>
        <li className={styles.ItemData}>
          <MdLocationCity className="h-[1.5rem] w-[1.5rem]" />
          <span>{profileData.university}</span>
        </li>
        <li className={styles.ItemData}>
          <MdDateRange className="h-[1.5rem] w-[1.5rem]" />
          <span>{profileData.date}</span>
        </li>
        <li className={styles.ItemData}>
          <MdPerson className="h-[1.5rem] w-[1.5rem]" />
          <span>{profileData.username}</span>
        </li>
        <li className={styles.ItemData}>
          <MdMailOutline className="h-[1.5rem] w-[1.5rem]" />
          <span>{profileData.email}</span>
        </li>
        <li className={styles.ItemData}>
          <MdOutlinePermContactCalendar className="h-[1.5rem] w-[1.5rem]" />
          <span>{profileData.document}</span>
        </li>
        <li className={styles.ItemData}>
          <MdRemoveRedEye className="h-[1.5rem] w-[1.5rem]" />
          <input
            disabled
            className={styles.Password}
            type="password"
            value={profileData.password}
          />
        </li>
      </ul>
      <TagPosition />
      <button
        className={styles.BtnForm}
        onClick={() => setShowModal(!showModal)}>
        Actualizar Información
      </button>
      {!showModal || (
        <Modal setShowModal={setShowModal} closeButton={false}>
          <FormUpdateCredentialUser setShowModal={setShowModal} />
        </Modal>
      )}
    </section>
  );
};
export { ConfigProfile };
