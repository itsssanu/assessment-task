import React from 'react';
import { X, Building2, CheckCircle2 } from 'lucide-react';
import { BsStopwatch } from 'react-icons/bs';

const SettlementModal = ({ isOpen, onClose, settlementData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-xl w-full mx-4 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Manage QR/POS</h2>
          <button 
            onClick={onClose}
            className="bg-white text-gray-700 rounded-md shadow-sm hover:bg-gray-50 hover:border-gray-200 transition-all duration-200 border border-gray-200"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 space-y-3">
          {/* Today's Total Collection */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Building2 size={18} className="text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Today's Total Collection</span>
            </div>
            <span className="text-lg font-semibold text-gray-900">₹{settlementData.totalCollection.toLocaleString()}</span>
          </div>

          {/* Already Settled */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle2 size={18} className="text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Already Settled</span>
            </div>
            <span className="text-base font-semibold text-gray-900">₹{settlementData.alreadySettled.toLocaleString()}</span>
          </div>

          {/* Settlement Calculation Section */}
          <div className="bg-gray-50 rounded-lg p-3 space-y-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Settlement Calculation
            </h3>
            
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600">Amount yet to be settled</span>
                <span className="font-medium text-gray-900">{settlementData.merchantName}</span>
              </div>
              
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600">Post pending amount</span>
                <span className="font-medium text-gray-900">{settlementData.merchantId}</span>
              </div>
              
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-600">Charges</span>
                <span className="font-medium text-gray-900">{settlementData.settlementDate}</span>
              </div>
            </div>
          </div>

          {/* Today's Total Collection (Second Instance) */}
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Building2 size={18} className="text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Today's Total Collection</span>
            </div>
            <span className="text-base font-semibold text-gray-900">₹{settlementData.finalAmount.toLocaleString()}</span>
          </div>

          {/* Settlement Info with Button */}
          <div className="bg-[#EAF5EE] rounded-lg p-3 space-y-2">
            <p className="text-xs text-gray-700">
              Tap 'Settle Now' to instantly get settlements in your bank account.
            </p>
            <p className="text-xs text-green-600 font-medium">
              Settle Now is Chargeable
            </p>
            
            {/* Settle Now Button inside the card */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-md font-medium border text-white text-sm bg-green-600 hover:border-[#42794A] hover:bg-green-700 flex-shrink-0">
              <BsStopwatch size={14} />
              Settle Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettlementModal;