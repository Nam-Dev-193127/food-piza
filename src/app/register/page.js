"use client";

import {signIn} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export default function RegisterPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);

    const [error, setError] = useState(false);

   async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    // 2:07:12
    const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        setUserCreated(true);
      }
      else {
        setError(true);
      }
      setCreatingUser(false);
   }
   
    return(
        <section
        className="
        mt-8
        "
        >
            <h1
            className="
            text-center text-primary text-4xl mb-4
            "
            >
                Đăng Ký
            </h1>
            {userCreated && (
                <div
                className="
                my-4
                text-center
                "
                >
                    Người dùng đã tạo.<br />
                    Bây giờ bạn có thể {''}
                    <Link 
                    className="
                    underline
                    "
                    href={'/login'}
                    >Đăng Nhập</Link>
                </div>
            )}
            {error && (
                <div
                className="
                my-4
                text-center
                "
                >
                    
                    Một lỗi đã xảy ra.<br/>
                    Vui lòng thử lại sau
                </div>
            )}
            <form
            className="
            block max-w-xs mx-auto
            "
            onSubmit={handleFormSubmit}
            >
                <input type="email" placeholder="email"
                value={email}
                disabled={creatingUser}
               onChange={ev => setEmail(ev.target.value)} 
                />
                <input type="password" placeholder="password"
                value={password}
                disabled={creatingUser}
                 onChange={ev => setPassword(ev.target.value)}
                />
                <button type="submit"
                disabled={creatingUser}
                >Đăng Ký</button>
                <div
                className="
                my-4 text-center text-gray-500
                "
                >
                hoặc đăng nhập với nhà cung cấp
                </div>
                <button
                className="
                flex
                gap-4
                justify-center
                "
                >
                <Image src={'/google.png'} alt={''} width={24} height={24} />
                    Đăng nhập bằng Google
                    </button>
                    {/* 1:58:54 */}
            </form>
        </section>    
    )
}