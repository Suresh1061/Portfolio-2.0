import Title from './Title'

const Container = ({ children, title }: { title?: string, children: React.ReactNode }): JSX.Element => {
    return (
        <div className={` max-w-screen-xl w-full mx-auto max-md:h-auto min-h-screen px-4 relative ${title ? 'pt-8' : 'pt-28'}`}>
            {title && <Title title={title} />}
            {children}
        </div>
    )
}

export default Container
