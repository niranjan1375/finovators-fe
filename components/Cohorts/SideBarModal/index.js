import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Modal from "finovators/commons/Modal";
import { useRequest } from "finovators/commons/hooks/useRequest";

const CohortDetailsModal = ({ open, cohort, onClose }) => {
    console.log(" cohort:", cohort);
    const router = useRouter();

    const [{ data: lol, loading, error }, executeRequest] = useRequest(
        {
            url: "/cohort_campaign",
            method: "POST",
            headers: { "Content-Type": "application/json" },
        },
        { manual: true }
    );
    console.log("lol", lol);

    useEffect(() => {
        if (cohort.CohortName) {
            executeRequest({ data: { name: cohort.CohortName } });
        }
    }, [cohort.CohortName, cohort.name, executeRequest]);

    const handleAccountClick = (accountId) => {
        router.push(`/account/${accountId}`);
    };

    const data = cohort.accounts;

    return (
        <Modal isOpen={open} title="Cohort Details" onClose={onClose}>
            <table className="detailsTable">
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>Spends</th>
                    </tr>
                </thead>
                <tbody>
                    {(data || []).map((item) => (
                        <tr
                            key={item.account}
                            onClick={() => handleAccountClick(item.account)}
                        >
                            <td>{item.account}</td>
                            <td>{item.spends}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Modal>
    );
};

export default CohortDetailsModal;
