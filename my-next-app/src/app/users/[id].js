"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserPage = () => {
    const router = useRouter();
    const { id } = router.query; // Получаем id из параметров маршрута
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(id); // Добавьте этот лог
        const fetchUser = async () => {
            if (id) {
                const res = await fetch(`https://dummyjson.com/users/${id}`);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setUser(data);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
            <p>maidenName: {user.maidenName}</p>
            <p>age: {user.age}</p>
            <p>gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>username: {user.username}</p>
            <p>password: {user.password}</p>
            <p>birthDate: {user.birthDate}</p>
            <p>bloodGroup: {user.bloodGroup}</p>
            <p>height: {user.height}</p>
            <p>weight: {user.weight}</p>
            <p>eyeColor: {user.eyeColor}</p>
            <p>hair color: {user.hair.color}</p>
            <p>hair type: {user.hair.type}</p>
            <p>ip: {user.ip}</p>
            <p>address: {user.address.address}</p>
            <p>city: {user.address.city}</p>
            <p>state: {user.address.state}</p>
            <p>stateCode: {user.address.stateCode}</p>
            <p>postalCode: {user.address.postalCode}</p>
            <p>coordinates: {user.address.coordinates}</p>
            <p>ein:{user.ein}</p>
            <p>ssn:{user.ssn}</p>
            <p>userAgent: {user.userAgent}</p>
            <p>crypto: {user.crypto.coin}, {user.crypto.wallet}, {user.crypto.network}</p>
            <p>role: {user.role}</p>
        </div>
    );
};

export default UserPage;