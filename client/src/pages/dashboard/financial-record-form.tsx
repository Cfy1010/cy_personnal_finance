export const FinancialRecordForm = () => {
  return (
    <div className="form-container">
      <form action="">
        <div className="form-field">
          <label htmlFor="">Description : </label>
          <input type="text" className="input" required />
        </div>
        <div className="form-field">
          <label htmlFor="">Montant : </label>
          <input type="number" className="input" required />
        </div>
        <div className="form-field">
          <label htmlFor="">Categorie : </label>
          <select className="input" name="" id="" required>
            <option value="Food">Nourriture</option>
            <option value="Rent">Rent</option>
            <option value="Salary">Salaire</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button>Validation</button>
      </form>
    </div>
  );
};
