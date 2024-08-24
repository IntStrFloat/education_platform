import { Header } from '@/widgets/Header';
import { QuestionBanner } from '@/widgets/QuestionBanner';
import { QuestionList } from '@/widgets/QuestionList';
import { Provider } from 'react-redux';
import { setupStore } from './store';
function App() {
  return (
    <Provider store={setupStore().store}>
    <div className="flex flex-col justify-center items-center">
      <div className="mx-auto max-w-[1440px] pt-[36px]">
        <Header />
        <div className="pt-[102px] pb-[126px] w-[600px] ">
          <QuestionBanner text="Вопросы с собеседований" />
        </div>
      </div>
      <QuestionList />
    </div>
  </Provider>
  );
}

export default App;
