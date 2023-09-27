
import { IconAvatarUser } from "@/icons/Icons";
import styles from "./config-profile.module.css"
import React, { useState } from 'react'
import { InfoIcons, ProfileData } from "./config-profile.types";
import { MdLocationCity, MdLocationOn, MdDateRange, MdPermIdentity,
    MdMailOutline, MdContactEmergency, MdRemoveRedEye, MdPerson, MdOutlinePermContactCalendar,
    MdOutlineSubtitles} from "react-icons/md";
import TagPosition from "../tag-position/TagPosition";
import Modal from "../modal/Modal";
import FormUpdateCredentialUser from "../form-update-credential-user/FormUpdateCredentialUser";

const ConfigProfile = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const profileData: ProfileData = {
        name: "MANUEL TOBIAS",
        lastName: "GARCIA CUELLO",
        location: "Río Negro, Antioquia",
        university: "Universidad de Antioquia",
        date: "Ago 22 - 2023",
        username: "manuel.garcia",
        email: "manuel.garcia@udea.edu.co",
        document: "1000907416",
        password: "contra123",
        position: "Profesional LSC"
    };
    const infoIcons = [
        <MdLocationOn key="location" className="h-8 w-8"/>,
        <MdLocationCity key="university" className="h-8 w-8"/>,
        <MdDateRange key="date" className="h-8 w-8"/>,
        <MdPerson key="username" className="h-8 w-8"/>,
        <MdMailOutline key="email" className="h-8 w-8"/>,
        <MdOutlinePermContactCalendar key="document" className="h-8 w-8"/>,
        <MdRemoveRedEye key="password" className="h-8 w-8"/>

    ]
  return (
    <div className="flex flex-col items-center mb-4">
        <IconAvatarUser width="100px" height="100px" />
        {/* <div className={styles.AvatarContainer}>
            <IconAvatarUser width="100px" height="100px" />
        </div> */}
        <section className={`${styles.SectionData} debug`}>
            <div>
                <h3 className={`${styles.FormTitle} debug`}>{profileData.name}</h3>
                <h3 className={`${styles.FormTitle} debug`}>{profileData.lastName}</h3>
            </div>
            <ul className="debug flex flex-col gap-4">

                <li className="flex gap-4">
                    <MdLocationOn className="h-8 w-8"/>
                    <span>{profileData.location}</span>
                </li>
                <li className="flex gap-4">
                    <MdLocationCity className="h-8 w-8"/>
                    <span>{profileData.university}</span>
                </li>
                <li className="flex gap-4">
                    <MdDateRange className="h-8 w-8"/>
                    <span>{profileData.date}</span>
                </li>
                <li className="flex gap-4">
                    <MdPerson className="h-8 w-8"/>
                    <span>{profileData.username}</span>
                </li>
                <li className="flex gap-4">
                    <MdMailOutline className="h-8 w-8"/>
                    <span>{profileData.email}</span>
                </li>
                <li className="flex gap-4">
                    <MdOutlinePermContactCalendar className="h-8 w-8"/>
                    <span>{profileData.document}</span>
                </li>
                <li className="flex gap-4">
                    <MdRemoveRedEye className="h-8 w-8"/>
                    <span>{profileData.password}</span>
                </li>
                
                
                
                
                
            </ul>
            <TagPosition/>
            <button
                className={styles.BtnForm}
                onClick={() => setShowModal(!showModal)}
            >Actualizar Información</button>
            {!showModal || (
            <Modal setShowModal={setShowModal} closeButton={false}>
                <FormUpdateCredentialUser setShowModal={setShowModal} />
            </Modal>
        )}
        </section>
    </div>
  )
};
export {ConfigProfile};