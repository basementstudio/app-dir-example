import s from './example.module.css'

const Page = () => {
  return (
    <div className={s.content}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit augue urna
        tincidunt fermentum, arcu elementum sociis fringilla quis aliquam
        vehicula justo sollicitudin penatibus placerat duis, tempus natoque quam
        ad ut gravida per sagittis varius iaculis. Diam eget cursus fringilla
        conubia eleifend, volutpat senectus vestibulum ut ridiculus class,
        platea sapien curabitur lacinia. Leo curae netus malesuada conubia velit
        nibh mus, metus ac ligula interdum fames iaculis sapien, enim quam
        tortor arcu taciti luctus. Tempor ultrices per hac mus justo phasellus
        praesent consequat imperdiet taciti interdum in quam, tincidunt dapibus
        accumsan est nibh ridiculus quisque ultricies himenaeos odio facilisis
        vitae.
      </p>{' '}
      <h1 style={{ margin: '20px 0', fontSize: 32, lineHeight: '1.2' }}>
        Try to go back to the homepage now with the browser's back button
      </h1>
    </div>
  )
}

export default Page
