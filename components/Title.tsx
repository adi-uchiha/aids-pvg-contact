interface TitleProps {
  title: string
}

const Title = ({title}: TitleProps) => {
  return (
    <div className="title-div">
    <span className={`flex w-full justify-center text-3xl text-white font-extralight mt-8`}>{title}</span>
    </div>
  )
}

export default Title