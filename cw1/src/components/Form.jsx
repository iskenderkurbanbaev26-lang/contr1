import React from 'react'
import pic from '../images/1.png'

export default function Form() {
  return (
    <section
      style={{
        backgroundImage: `url(${pic})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '450px',
        top: '154px',

      }}
    >
      <div className='container pt-4'>
        <h1 className='text-[48px] text-white font-[Cormorant] '>Помочь проекту</h1>
        <p>Равным образом, экономическая повестка сегодняшнего дня не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Как принято считать, элементы политического процесса рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. </p>

<div className="flex flex-col items-start gap-4 mt-8">
  <input
    type="text"
    placeholder="Имя"
    className="bg-white  border border-white/30 text-black px-4 py-3 w-80"
  />

  <input
    type="email"
    placeholder="Email"
    className="bg-white border border-white/30 text-black px-4 py-3 w-80"
  />

  <button className="text-[rgba(11,25,25,1)] bg-[rgba(186,226,73,1)] border border-[#BAE249] px-4 py-3 w-40">
    Отправить
  </button>
</div>


      </div>
    </section>
  )
}
