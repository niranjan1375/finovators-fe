import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Modal from "finovators/commons/Modal";

const CohortDetailsModal = ({open, cohort, onClose }) => {
  const router = useRouter();

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
      {(data||[]).map((item) => (
        <tr key={item.account} onClick={() => handleAccountClick(item.account)}>
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