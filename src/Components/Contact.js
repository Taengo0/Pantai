import video from "../Asset/Siti Nurulkhadijah & Syed Ikhwan.MP4";

const Contact = () => {
    const imageArray = [
        "https://lh3.googleusercontent.com/pw/AP1GczPDMW45I1kLpb6slfqWrpvUdpyJXd0GoP7Tk8FH4okp1k2cx9sv_nx0bn7OJFtUksSiUxNTzam6fuXWKRJub6nQ1q7eKG6Uyc93t3wXEN7olxZe9L3R=w2400",
        "https://lh3.googleusercontent.com/pw/AP1GczNWXpz9LE-saGilCSARBgbMfFaejqJkexk4x27pjJ_Z4_2bcNTBR-5FXxYQFOCNjBtg-IJRo-DDnZkmUcr8LoIcLKWvwtE440Hdf9vgXqn568mD5H4n=w2400",
        "https://lh3.googleusercontent.com/pw/AP1GczNAt8TDN3Gebftei1WtnIzzDfq5Qboxy96gD0pT_z1VLXwfzIseEn1fP5_rS4LxAKQ39i62isNQwmBkn0SPqw4UiyhsqBRiK6n_VLK5DfR7q94l7zCd=w2400",
        "https://lh3.googleusercontent.com/pw/AP1GczMNc5Ns09R2HGhC2cX8WNU6cZTMwnaeucNOqiPF_0eqXU11_c_g2XgLFpvWplhkMGIeWWiZSdiwh83HwTPrw7CfgyLoaXM-IPjoMsMecAXyifBngasE=w2400",
        "https://lh3.googleusercontent.com/pw/AP1GczO2zpj4ad2V1cWETCOVxE9D6PpA9CFxBLvnIBYIawpzhiPkGe2YGeC8ck-llEhMpULgyFpDt0PauSV-w5FKwzEae8d8wf3KmzBveDNDCIqEQXt4MY3R=w2400",
        "https://lh3.googleusercontent.com/pw/AP1GczOLBwBxZtXimQrKltE0y6VqZ43YhbE2y6ZJB-6BjS7e0IA_JpIRhEf7ZqE3OHOF1GVqy1v-u1oMMTn5lBV-MUh-DT3gx5ac0lToFKnenw-csY5esSr9=w2400"
    ];
    return (
        <>
            {imageArray.map((item, index) => (
                <section key={index}>
                    <img src={item} alt="wedding" className="imageClass"/>
                </section>
            ))}
            <div className="imageText">
                <div>Ikhwan and Nurul</div>
            </div>
        </>
    );
};
export default Contact;
