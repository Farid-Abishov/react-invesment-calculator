export default function UserInput() {
  return (
    <section id="user-input">

      <div className="input-group">
        <p>
          <label htmlFor="">initial investment</label>
          <input type="text" />
        </p>

        <p>
          <label htmlFor="">Annual investment</label>
          <input type="text" />
        </p>
      </div>

      <div className="input-group">
      <p>
          <label htmlFor="">expected return</label>
          <input type="number" />
        </p>

        <p>
          <label htmlFor="">Duration</label>
          <input type="number" />
        </p>
      </div>
      
    </section>
  );
}
