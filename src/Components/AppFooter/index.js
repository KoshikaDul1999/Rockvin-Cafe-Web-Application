import Typography from "antd/es/typography/Typography"

function AppFooter(){
    return <div className="AppFooter">
        <Typography.Link href="">179/b "Kinkini", Midigama, Midigama, Matara 0094 Sri Lanka</Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"}>
            Privacy Policy
        </Typography.Link>
        <Typography.Link href="https://www.google.com" target={"_blank"}>
            Terms of Use
        </Typography.Link>
    </div>
}

export default AppFooter
