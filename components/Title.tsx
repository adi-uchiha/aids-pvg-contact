interface TitleProps {
  title: string
}

const Title = ({title}: TitleProps) => {
  return (
    <div className="title-div">
    <span className={`pl-5 flex w-full justify-left text-xl font-bold text-white mt-8`}>{title}</span>
    </div>
  )
}

export default Title