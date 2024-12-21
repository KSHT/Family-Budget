import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlusCircle, Trash2, Moon, Sun } from 'lucide-react';

const FamilyBudgetTracker = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [income, setIncome] = useState([
    { description: 'Salary', amount: 0 }
  ]);
  const [expenses, setExpenses] = useState([
    { category: 'Housing', description: 'Rent/Mortgage', amount: 0 },
    { category: 'Utilities', description: 'Electricity', amount: 0 },
    { category: 'Food', description: 'Groceries', amount: 0 }
  ]);

  // Format number as NIS currency
  const formatNIS = (number) => {
    return `₪${number.toFixed(2)}`;
  };

  const addIncome = () => {
    setIncome([...income, { description: '', amount: 0 }]);
  };

  const addExpense = () => {
    setExpenses([...expenses, { category: '', description: '', amount: 0 }]);
  };

  const updateIncome = (index, field, value) => {
    const newIncome = [...income];
    newIncome[index][field] = value;
    setIncome(newIncome);
  };

  const updateExpense = (index, field, value) => {
    const newExpenses = [...expenses];
    newExpenses[index][field] = value;
    setExpenses(newExpenses);
  };

  const removeIncome = (index) => {
    setIncome(income.filter((_, i) => i !== index));
  };

  const removeExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const totalIncome = income.reduce((sum, item) => sum + Number(item.amount), 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + Number(item.amount), 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="w-full max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[30vh] font-bold leading-none">Budget</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full ${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-200 text-gray-900'}`}
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>

        <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
          <CardContent className="pt-6">
            {/* Income Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Income</h3>
                <button
                  onClick={addIncome}
                  className={`flex items-center ${darkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'}`}
                >
                  <PlusCircle className="w-4 h-4 mr-1" />
                  Add Income
                </button>
              </div>
              {income.map((item, index) => (
                <div key={index} className="flex gap-4 mb-2">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateIncome(index, 'description', e.target.value)}
                    placeholder="Description"
                    className={`flex-1 p-2 border rounded ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  <input
                    type="number"
                    value={item.amount}
                    onChange={(e) => updateIncome(index, 'amount', e.target.value)}
                    placeholder="Amount"
                    className={`w-32 p-2 border rounded ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  <button
                    onClick={() => removeIncome(index)}
                    className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-700'}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Expenses Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Expenses</h3>
                <button
                  onClick={addExpense}
                  className={`flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                >
                  <PlusCircle className="w-4 h-4 mr-1" />
                  Add Expense
                </button>
              </div>
              {expenses.map((item, index) => (
                <div key={index} className="flex gap-4 mb-2">
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) => updateExpense(index, 'category', e.target.value)}
                    placeholder="Category"
                    className={`w-32 p-2 border rounded ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateExpense(index, 'description', e.target.value)}
                    placeholder="Description"
                    className={`flex-1 p-2 border rounded ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  <input
                    type="number"
                    value={item.amount}
                    onChange={(e) => updateExpense(index, 'amount', e.target.value)}
                    placeholder="Amount"
                    className={`w-32 p-2 border rounded ${
                      darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                  <button
                    onClick={() => removeExpense(index)}
                    className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-700'}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="border-t pt-4">
              <div className="grid grid-cols-3 gap-4">
                <div className={`text-center p-4 rounded ${
                  darkMode ? 'bg-green-900/20' : 'bg-green-50'
                }`}>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Income</div>
                  <div className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {formatNIS(totalIncome)}
                  </div>
                </div>
                <div className={`text-center p-4 rounded ${
                  darkMode ? 'bg-red-900/20' : 'bg-red-50'
                }`}>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Expenses</div>
                  <div className={`text-xl font-bold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                    {formatNIS(totalExpenses)}
                  </div>
                </div>
                <div className={`text-center p-4 rounded ${
                  darkMode ? 'bg-blue-900/20' : 'bg-blue-50'
                }`}>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Balance</div>
                  <div className={`text-xl font-bold ${
                    darkMode 
                      ? (balance >= 0 ? 'text-green-400' : 'text-red-400')
                      : (balance >= 0 ? 'text-green-600' : 'text-red-600')
                  }`}>
                    {formatNIS(balance)}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FamilyBudgetTracker;
