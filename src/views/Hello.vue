<template>
    <div>
        <el-table-column prop="date" label="序号" width="180" />
                <el-table-column prop="name" label="权利人名称" width="180" />
                <el-table-column prop="address" label="联系电话" />
                <el-table-column prop="address" label="户号" />
                <el-table-column prop="address" label="创建人" />
                <el-table-column prop="address" label="创建时间" />
                <el-table-column prop="address" label="操作">
                    <el-button type="success" plain size="small" style="background-color: white;border-color:white;margin-left:-10px">下发图版</el-button>
                    <el-button type="info" plain size="small"  style="background-color: white;border-color:white;">删除人员</el-button>
                </el-table-column>

    </div>
</template>