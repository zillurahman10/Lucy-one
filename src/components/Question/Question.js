import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='react-question'>
                <h1 className='questions'>রিয়েক্ট কিভাবে কাজ করে ?</h1>
                <p className='ans'>রিয়েক্ট হলো একটি ফ্লিক্সিয়াবল , এফিসিয়েন্ট এবং ওপেন সোর্স জাভাস্ক্রিপ্ট লাইব্রেরী । রিয়েক্ট জেএসএক্স ব্যবহার করে একটা জাভাস্ক্রিপ্ট কোড কে এইচটিএমএল কোড এ রূপান্তরিত করে । রিয়েক্ট এর একটা ভার্চুয়াল ডম আছে যার সাহায্যে সে আমাদের ওয়েবসাইট টা আপডেট করে । আমরা যখন কোড এ কোনো চেঞ্জ করি তখন রিয়েক্ট তার ভার্চুয়াল ডম এর সাথে আমাদের আগের যে ওয়েবসাইট টি ছিল, যেটাতে কোনো চেঞ্জ হয় নি সেটার সাথে ম্যাচ করে । তারপর সে যদি কোনো চেঞ্জ খুঁজে পায় তখন ওয়েবসাইট টা আপডেট করে দেয়।</p>
            </div>
            <div className='props-and-state-question'>
                <h1 className='questions'>প্রপস এবং স্টেট এর মধ্যে পার্থক্য কি ?</h1>
                <p className='ans'>প্রপস দিয়ে আমরা একটা কম্পোনেন্ট থেকে আর একটা কম্পোনেন্ট এ ডাটা পাঠাতে পারি । স্টেট হচ্ছে কোনো একটা কম্পোনেন্ট এর নিজস্ব অবজেক্ট । আমরা প্রপস চেঞ্জ করতে পারবো না। আমরা স্টেট চেঞ্জ করতে পারবো । </p>
            </div>
        </div>
    );
};

export default Question;