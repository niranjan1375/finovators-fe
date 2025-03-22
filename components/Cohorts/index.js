import { useState } from "react";
import { motion } from "framer-motion";

import styles from "./cohorts.module.css";
import CohortDetailsModal from "./SideBarModal";
import dummyCohortss from "finovators/dummy responses/generate-cohorts.json";
import { useRequest } from "finovators/commons/hooks/useRequest";



export default function CohortsPage() {
    const { data } = useRequest(
        {
            url: "/generate-cohort",
            method: "GET",
        },
        { manual: false }
    );

    const cohorts = (data || dummyCohortss).cohorts.reduce(
        (acc, curr, index) => {
            return [...acc, { ...curr, id: index + 1 }];
        },
        []
    );

    console.log(" cohorts:", cohorts);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cohorts</h1>
            <div className={styles.grid}>
                {cohorts.map((cohort) => (
                    <CohortCard key={cohort.id} cohort={cohort} />
                ))}
            </div>
        </div>
    );
}

function CohortCard({ cohort }) {
    const [openModal, setOpenModal] = useState(false);
    console.log(" openModal:", openModal);

    const {
        AgeGroup,
        CohortName,
        Locations,
        IncomeLevel,
        SpendingCategory,
        AvgMonthlySpend,
        PastRewardsRedeemed,
    } = cohort;

    return (
        <>
            <motion.div
                className={styles.card}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <motion.div
                    className={styles.cardFront}
                    style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <h2>{CohortName}</h2>
                </motion.div>
                <motion.div
                    className={styles.cardBack}
                    style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <div>
                        {" "}
                        <p>{AgeGroup}</p>
                        <p>{Locations}</p>
                        <p>{IncomeLevel}</p>
                        <p>{SpendingCategory}</p>
                        <p>{AvgMonthlySpend}</p>
                        <p>{PastRewardsRedeemed}</p>
                        <button
                            className={styles.viewButton}
                            onClick={() => {
                                setOpenModal((p) => !p);
                            }}
                        >
                            View Full Cohort
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            {openModal && (
                <CohortDetailsModal
                    open={openModal}
                    cohort={cohort}
                    onClose={() => setOpenModal(false)}
                />
            )}
        </>
    );
}
