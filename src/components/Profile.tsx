// 具名导出
import Avatar from "./Avatar.tsx";
import Card from "./Card.tsx";

export default function Profile() {
    return (
        <Card>
            <Avatar
                person={{name: 'Lin Lanying', imageId: '1bX5QH6'}}
                size={100}

            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </Card>
    );
}