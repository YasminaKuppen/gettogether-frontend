import React from "react";

<div className="about-section">
    <h3>Over jou</h3>
    <form>
          <textarea
              id="about"
              name="about"
              placeholder="Schrijf hier wat over jezelf"
              value={about}
              onChange={handleChange}
              rows="5"
              cols="30"
          ></textarea>
        <button type="submit">Versturen</button>
    </form>
</div>

PROFIEL