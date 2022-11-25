import "../styles/Advice.css"

const Advice = () => {
  return (
    <section className="advice-containter">
      <article className="advice">
        <div className="avoid">
          <h2>Avoid tempting situations</h2>
          <p>Whenever possible, avoid any situations where you know you will confront temptation. If you can 't completely avoid a situation that may involve temptation, do what you can to reduce the pull. Divert your attention away from temptation. Chnage the way you think about the temptation so it becomes less appealing.</p>
        </div>
        <div className="replace">
          <h2>Replace unhealthy behaviors with healthy ones</h2>
          <p>Identify the unhealthy habit that you want to change and replace it with a habit that will be more beneficial to you. Habits are hard to break. So try making simple changes to start off. Those simple changes will eventually become automatic. Also, try not to replace your new behavior with something that's similar to the old one.</p>
        </div>
        <div className="Prepare">
          <h2>Prepare mentally</h2>
          <p>If you can't avoid a tempting situation, prepare yourself in advance. Think about how you want to handle it and mentally practice what you plan.</p>
        </div>
        <div className="enlist">
          <h2>Ask for help</h2>
          <p>Ask friends, family and co-workers to support your efforts to change.</p>
        </div>
        <div className="reward">
          <h2>Reward yourself of small steps</h2>
          <p>Motivate yourself to change your habits by using incentives or rewards. Consider setting a goal for the week, and if you reach it, treat yourself. Knowing there's a reward in the future might motivate you to stick with ypur plane to break the habit.</p>
        </div>
      </article>
    </section>
  );
}

export default Advice;