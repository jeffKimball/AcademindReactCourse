export default function Tabs({children, buttons, buttonsContainer}) {
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