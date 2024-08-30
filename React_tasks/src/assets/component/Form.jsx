import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

const MyForm = ({schema}) => {
  const { t, i18n } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1" htmlFor="language">{t('Select Language')}:</label>
        <select
          id="language"
          onChange={handleLanguageChange}
          value={i18n.language}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="fr">French</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
        </select>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">{t('name')}:</label>
          <input
            id="name"
            type="text"
            placeholder={t('placeholder_name')}
            {...register('name')}
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">{t('email')}:</label>
          <input
            id="email"
            type="email"
            placeholder={t('placeholder_email')}
            {...register('email')}
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="password">{t('password')}:</label>
          <input
            id="password"
            type="password"
            placeholder={t('placeholder_password')}
            {...register('password')}
            className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : ''}`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t('submit')}
        </button>
      </form>
    </div>
  );
};

export default MyForm;
