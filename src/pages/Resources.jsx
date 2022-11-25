import '../styles/Resources.css'

const Resources = () => {
  return (
    <section className="resource-containter">
      <article className="resource">
        <div>Reources</div>
        <div className="resource-content">
          <div>
            <a href="https://health.clevelandclinic.org/how-to-break-bad-habits/">Cleveland Clinic</a>
          </div>
          <div>
            <a href="https://www.healthline.com/health/how-to-break-a-habit">Healthline</a>
          </div>
          <div>
          <a href="https://www.health.harvard.edu/blog/how-to-break-a-bad-habit-202205022736">Harvard Health Publishing Harvard Medical School</a>
          </div>
          <div>
            <a href="https://www.allinahealth.org/healthysetgo/care/eight-ways-you-can-help-someone-break-a-bad-habit">AllinaHealth</a>
          </div>
          <div>
            <a href="https://mindworks.org/blog/how-meditation-works-to-stop-bad-habits/">Mindworks</a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Resources;