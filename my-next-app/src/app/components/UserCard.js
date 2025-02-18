import Link from 'next/link';

const UserCard = ({ user }) => {
    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
            <Link href={`/users/${user.id}`}>
                <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-center">{`${user.firstName} ${user.lastName}`}</h2>
            </Link>
        </div>
    );
};

export default UserCard;