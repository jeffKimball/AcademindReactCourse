const Tabs = ({children, buttons, buttonsContainer}) => {
    const CustomContainer = buttonsContainer
    return (
        <>
            <CustomContainer>
                {buttons}
            </CustomContainer>
            {children}
        </>
    )
}

export default Tabs